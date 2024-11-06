
using AutoMapper;
using Microsoft.EntityFrameworkCore.Infrastructure;
using UM.Application.Enum;
using UM.Application.IService;
using UM.Domain.DBModel;
using UM.Domain.IEntity;
using UM.Domain.IRepository;
using UM.Domain.Model;
using UM.Domain.ViewModel;

namespace UM.Application.Service
{
    public class CommentService : ICommentService
    {
        private readonly ICommentRepository _commentRepository;
        private readonly ICurrentUser _currentUser;
        private readonly IMapper _mapper;

        public CommentService(ICommentRepository commentRepository, IMapper mapper, ICurrentUser currentUser)
        {
            _commentRepository = commentRepository;
            _mapper = mapper;
            _currentUser = currentUser;
        }

        public async Task Add(CommentModel comment)
        {
            var data = _mapper.Map<Comment>(comment);
            await _commentRepository.Insert(data);
        }
        
        public async Task<Result> Update(CommentModel comment)
        {
            var existingData = await _commentRepository.FindBy(x => x.Id == comment.Id && !x.IsDeleted);
            if (existingData == null)
            {
                return Result.NotFound;
            }
            if (existingData.CreatedBy != _currentUser.User.Id)
            {
                return Result.Forbidden;
            }
            
            existingData.Description = comment.Description;
            await _commentRepository.Update(existingData);

            return Result.Success;
            
        }
        public async Task Delete(int id)
        {
            var existingData = await _commentRepository.FindBy(x => x.Id == id && !x.IsDeleted);
            if (existingData != null)
            {
                existingData.IsDeleted = true;
                await _commentRepository.Update(existingData);
            }
        }
        public async Task<Result> Delete(CommentModel comment)
        {
            var existingData = await _commentRepository.FindBy(x => x.Id == comment.Id && !x.IsDeleted);
            if (existingData == null)
            {
                return Result.NotFound;
            }
            if (existingData.CreatedBy != _currentUser.User.Id)
            {
                return Result.Forbidden;
            }
            if (existingData != null)
            {
                existingData.IsDeleted = true;
                await _commentRepository.Update(existingData);
            }
            return Result.Success;
        }

        public async Task<List<CommentViewModel>> GetAll()
        {
            var data = await _commentRepository.GetAll(x => !x.IsDeleted);
            var result = _mapper.Map<List<CommentViewModel>>(data);
            return result.OrderByDescending(x => x.DateCreated).ToList();
        }
        public async Task<List<CommentViewModel>> GetAll(int postId)
        {
            var data = await _commentRepository.GetAll(x => !x.IsDeleted && x.PostId == postId);
            var result = _mapper.Map<List<CommentViewModel>>(data);
            return result.OrderByDescending(x => x.DateCreated).ToList();
        }

        public async Task<CommentViewModel> GetById(int id)
        {
            var data = await _commentRepository.FindBy(x => !x.IsDeleted && x.Id == id);
            var result = _mapper.Map<CommentViewModel>(data);
            return result;
        }
    }
}


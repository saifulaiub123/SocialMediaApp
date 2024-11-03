using AutoMapper;
using UM.Application.IService;
using UM.Domain.DBModel;
using UM.Domain.IRepository;
using UM.Domain.Model;
using UM.Domain.ViewModel;
using UM.Infrastructure.Repository;

namespace UM.Application.Service
{
    public class PostService : IPostService
    {
        private readonly IPostRepository _postRepository;
        private readonly IMapper _mapper;

        public PostService(IPostRepository postRepository, IMapper mapper)
        {
            _postRepository = postRepository;
            _mapper = mapper;
        }

        public async Task Add(PostModel post)
        {
            var data = _mapper.Map<Post>(post);
            await _postRepository.Insert(data);
            await _postRepository.SaveAsync();
        }
        public async Task Update(PostModel post)
        {
            var existingData = await _postRepository.FindBy(x => x.Id == post.Id && !x.IsDeleted);
            if (existingData != null)
            {
                existingData.Title = post.Title;
                existingData.Description = post.Description;
                await _postRepository.Update(existingData);
                await _postRepository.SaveAsync();

            }
        }
        public async Task Delete(int id)
        {
            var existingData = await _postRepository.FindBy(x => x.Id == id && !x.IsDeleted);
            if (existingData != null)
            {
                existingData.IsDeleted = true;
                await _postRepository.Update(existingData);
                await _postRepository.SaveAsync();

            }
        }

        public async Task<List<PostViewModel>> GetAll()
        {
            var data = await _postRepository.GetAll(x => !x.IsDeleted);
            var result = _mapper.Map<List<PostViewModel>>(data);
            return result.OrderByDescending(x => x.DateCreated).ToList();
        }

        public async Task<PostViewModel> GetById(int id)
        {
            var data = await _postRepository.FindBy(x => !x.IsDeleted && x.Id == id);
            var result = _mapper.Map<PostViewModel>(data);
            return result;
        }

        
    }
}

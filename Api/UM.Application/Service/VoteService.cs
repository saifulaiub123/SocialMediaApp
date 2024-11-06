
using AutoMapper;
using UM.Application.Enum;
using UM.Application.IService;
using UM.Domain.DBModel;
using UM.Domain.IRepository;
using UM.Domain.Model;
using UM.Domain.ViewModel;

namespace UM.Application.Service
{
    public class VoteService : IVoteService
    {
        private readonly IVoteRepository _voteRepository;
        private readonly IPostRepository _postRepository;
        private readonly IMapper _mapper;

        public VoteService(IVoteRepository voteRepository, IMapper mapper, IPostRepository postRepository)
        {
            _voteRepository = voteRepository;
            _mapper = mapper;
            _postRepository = postRepository;
        }

        public async Task<Result> Add(VoteModel vote)
        {
            var post = await _postRepository.FindBy(x => x.Id == vote.PostId && !x.IsDeleted);
            if (post == null)
                return Result.NotFound;

            var data = _mapper.Map<Vote>(vote);
            await _voteRepository.Insert(data);

            return Result.Success;
        }
        //public async Task Update(VoteModel vote)
        //{
        //    var existingData = await _voteRepository.FindBy(x => x.Id == vote.Id && !x.IsDeleted);
        //    if (existingData != null)
        //    {
        //        //existingData.Name = vote.Name;
        //        await _voteRepository.Update(existingData);
        //    }
        //}
        //public async Task Delete(int id)
        //{
        //    var existingData = await _voteRepository.FindBy(x => x.Id == id && !x.IsDeleted);
        //    if (existingData != null)
        //    {
        //        existingData.IsDeleted = true;
        //        await _voteRepository.Update(existingData);
        //    }
        //}

        //public async Task<List<VoteViewModel>> GetAll()
        //{
        //    var data = await _voteRepository.GetAll(x => !x.IsDeleted);
        //    var result = _mapper.Map<List<VoteViewModel>>(data);
        //    return result.OrderByDescending(x => x.DateCreated).ToList();
        //}

        //public async Task<VoteViewModel> GetById(int id)
        //{
        //    var data = await _voteRepository.FindBy(x => !x.IsDeleted && x.Id == id);
        //    var result = _mapper.Map<VoteViewModel>(data);
        //    return result;
        //}
    }
}


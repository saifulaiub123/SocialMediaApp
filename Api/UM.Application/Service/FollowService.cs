
using AutoMapper;
using UM.Application.IService;
using UM.Domain.DBModel;
using UM.Domain.IEntity;
using UM.Domain.IRepository;
using UM.Domain.Model;
using UM.Domain.ViewModel;

namespace UM.Application.Service
{
    public class FollowService : IFollowService
    {
        private readonly IFollowRepository _followRepository;
        private readonly ICurrentUser _currentUser;
        private readonly IMapper _mapper;

        public FollowService(IFollowRepository followRepository, IMapper mapper, ICurrentUser currentUser)
        {
            _followRepository = followRepository;
            _mapper = mapper;
            _currentUser = currentUser;
        }

        public async Task Add(FollowModel follow)
        {
            var data = _mapper.Map<Follow>(follow);
            data.FollowedBy = _currentUser.User.Id;
            await _followRepository.Insert(data);
        }
        
        public async Task Delete(int userId)
        {
            var existingData = await _followRepository.FindBy(x => x.UserId == userId && !x.IsDeleted);
            if (existingData != null)
            {
                existingData.IsDeleted = true;
                await _followRepository.Update(existingData);
            }
        }

        public async Task<List<FollowViewModel>> GetAll()
        {
            var data = await _followRepository.GetAll(x => !x.IsDeleted);
            var result = _mapper.Map<List<FollowViewModel>>(data);
            return result.OrderByDescending(x => x.DateCreated).ToList();
        }
        public async Task<List<FollowViewModel>> MyFollowers()
        {
            var data = await _followRepository.GetAll(x => !x.IsDeleted && x.UserId == _currentUser.User.Id);
            var result = _mapper.Map<List<FollowViewModel>>(data);
            return result.OrderByDescending(x => x.DateCreated).ToList();
        }
    }
}


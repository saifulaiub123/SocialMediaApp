
using AutoMapper;
using UM.Application.IService;
using UM.Domain.DBModel;
using UM.Domain.IRepository;
using UM.Domain.Model;
using UM.Domain.ViewModel;

namespace UM.Application.Service
{
    public class FollowService : IFollowService
    {
        private readonly IFollowRepository _followRepository;
        private readonly IMapper _mapper;

        public FollowService(IFollowRepository followRepository, IMapper mapper)
        {
            _followRepository = followRepository;
            _mapper = mapper;
        }

        public async Task Add(FollowModel follow)
        {
            var data = _mapper.Map<Follow>(follow);
            await _followRepository.Insert(data);
        }
        
        public async Task Delete(int id)
        {
            var existingData = await _followRepository.FindBy(x => x.Id == id && !x.IsDeleted);
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
    }
}


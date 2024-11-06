using UM.Domain.Model;
using UM.Domain.ViewModel;

namespace UM.Application.IService
{
    public interface IFollowService
    {
        Task<List<FollowViewModel>> GetAll();
        Task<List<FollowViewModel>> MyFollowers();
        Task Add(FollowModel follow);
        Task Delete(int userId); 
    }
}


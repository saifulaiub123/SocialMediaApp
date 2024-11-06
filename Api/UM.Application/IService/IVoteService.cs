using UM.Application.Enum;
using UM.Domain.Model;
using UM.Domain.ViewModel;

namespace UM.Application.IService
{
    public interface IVoteService
    {
        //Task<List<VoteViewModel>> GetAll();
        //Task<VoteViewModel> GetById(int id);
        Task<Result> Add(VoteModel vote);
        //Task Update(VoteModel vote);
        //Task Delete(int id); 
    }
}


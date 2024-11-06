using UM.Application.Enum;
using UM.Domain.Model;
using UM.Domain.ViewModel;

namespace UM.Application.IService
{
    public interface ICommentService
    {
        Task<List<CommentViewModel>> GetAll();
        Task<List<CommentViewModel>> GetAll(int postId);
        Task<CommentViewModel> GetById(int id);
        Task Add(CommentModel comment);
        Task<Result> Update(CommentModel comment);
        Task Delete(int id); 
        Task<Result> Delete(CommentModel comment); 
    }
}


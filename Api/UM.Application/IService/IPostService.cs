using UM.Domain.Model;
using UM.Domain.ViewModel;

namespace UM.Application.IService
{
    public interface IPostService
    {
        Task<List<PostViewModel>> GetAll();
        Task<List<PostViewModel>> MyPosts();
        Task<List<PostViewModel>> MyFeed();
        Task<PostViewModel> GetById(int id);
        Task Add(PostModel post);
        Task Update(PostModel post);
        Task Delete(int id); 
    }
}

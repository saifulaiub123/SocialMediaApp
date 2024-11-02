using AutoMapper;
using UM.Domain.DBModel;
using UM.Domain.Model;
using UM.Domain.ViewModel;


namespace UM.Domain.Mapping
{
    public class PostMapping : Profile
    {
        public PostMapping()
        {
            CreateMap<Post,PostModel>().ReverseMap();
            CreateMap<Post,PostViewModel>().ReverseMap();
        }
    }
}

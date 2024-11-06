using AutoMapper;
using UM.Domain.DBModel;
using UM.Domain.Model;
using UM.Domain.ViewModel;


namespace UM.Domain.Mapping
{
    public class FollowMapping : Profile
    {
        public FollowMapping()
        {
            CreateMap<Follow,FollowModel>().ReverseMap();
            CreateMap<Follow,FollowViewModel>().ReverseMap();
        }
    }
}

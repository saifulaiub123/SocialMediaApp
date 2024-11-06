using AutoMapper;
using UM.Domain.DBModel;
using UM.Domain.Model;
using UM.Domain.ViewModel;


namespace UM.Domain.Mapping
{
    public class CommentMapping : Profile
    {
        public CommentMapping()
        {
            CreateMap<Comment,CommentModel>().ReverseMap();
            CreateMap<Comment,CommentViewModel>().ReverseMap();
        }
    }
}

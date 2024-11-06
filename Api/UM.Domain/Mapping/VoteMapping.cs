using AutoMapper;
using UM.Domain.DBModel;
using UM.Domain.Model;
using UM.Domain.ViewModel;


namespace UM.Domain.Mapping
{
    public class VoteMapping : Profile
    {
        public VoteMapping()
        {
            CreateMap<Vote,VoteModel>().ReverseMap();
            CreateMap<Vote,VoteViewModel>().ReverseMap();
        }
    }
}

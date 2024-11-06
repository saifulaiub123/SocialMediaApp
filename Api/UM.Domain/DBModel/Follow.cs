using UM.Domain.Model;

namespace UM.Domain.DBModel
{
    public class Follow : BaseModel<int>
    {
        public int UserId { get; set; }
        public int FollowedBy { get; set; }
        public bool IsDeleted { get; set; }
    }
}

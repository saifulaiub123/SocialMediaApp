using UM.Domain.Model;

namespace UM.Domain.DBModel
{
    public class Follow : BaseModel<int>
    {
        public int UserId { get; set; }
        public int FollowedBy { get; set; }
        public bool IsDeleted { get; set; }

        public virtual ApplicationUser User { get; set; }
        public virtual ApplicationUser UserFollowedBy { get; set; }


    }
}

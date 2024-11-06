using UM.Domain.Model;

namespace UM.Domain.DBModel
{
    public class Comment : BaseModel<int>
    {
        public string Description { get; set; }
        public int PostId { get; set; }
        public bool IsDeleted { get; set; }
        public virtual Post Post { get; set; }
    }
}

using UM.Domain.Model;

namespace UM.Domain.DBModel
{
    public class Post : BaseModel<int>
    {
        public string Title { get; set; }
        public string Description { get; set; }
        public bool IsDeleted { get; set; }
    }
}

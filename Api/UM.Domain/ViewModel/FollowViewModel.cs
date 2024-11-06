
namespace UM.Domain.ViewModel
{
    public class FollowViewModel
    {
        public int? Id { get; set; }
        public int UserId { get; set; }
        public int FollowedBy { get; set; }

        public DateTime DateCreated { get; set; }
    }
}


namespace UM.Domain.Model
{
    public class VoteModel
    {
        public int PostId { get; set; }
        public int VoteType { get; set; }// 0 = DownVote, 1 = UpVote
    }
}

using UM.Domain.Model;

namespace UM.Domain.DBModel
{
    public class Vote : BaseModel<int>
    {
        public int PostId { get; set; }
        public int VoteType { get; set; }// 0 = DownVote, 1 = UpVote

        public Post Post { get; set; }

    }
}

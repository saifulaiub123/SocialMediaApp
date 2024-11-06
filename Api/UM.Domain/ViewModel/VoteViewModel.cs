using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace UM.Domain.ViewModel
{
    public class VoteViewModel
    {
        public int? Id { get; set; }
        public int PostId { get; set; }
        public int VoteType { get; set; }// 0 = DownVote, 1 = UpVote

        public DateTime DateCreated { get; set; }
    }
}

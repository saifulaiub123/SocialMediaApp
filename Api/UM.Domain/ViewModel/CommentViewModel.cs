using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace UM.Domain.ViewModel
{
    public class CommentViewModel
    {
        public int? Id { get; set; }
        public int PostId { get; set; }
        public string Description { get; set; }


        public DateTime DateCreated { get; set; }
    }
}

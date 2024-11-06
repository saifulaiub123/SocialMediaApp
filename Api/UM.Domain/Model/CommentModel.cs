using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using UM.Domain.Model;

namespace UM.Domain.Model
{
    public class CommentModel
    {
        public int? Id { get; set; }
        public string Description { get; set; }

        public int PostId { get; set; }

    }
}

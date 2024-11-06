using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using UM.Domain.DBModel;

namespace UM.Domain.IRepository
{
    public interface ICommentRepository : IRepository<Comment, int>
    {
        
    }
}

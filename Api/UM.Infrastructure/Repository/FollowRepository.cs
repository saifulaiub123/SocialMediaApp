using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using UM.Domain.DBModel;
using UM.Domain.IRepository;
using UM.Infrastructure.DBContext;

namespace UM.Infrastructure.Repository
{
    public class FollowRepository : Repository<Follow, int>, IFollowRepository
    {
        private readonly ApplicationDbContext _context;

        public FollowRepository(ApplicationDbContext context) : base(context)
        {
            _context = context;
        }
    }
}

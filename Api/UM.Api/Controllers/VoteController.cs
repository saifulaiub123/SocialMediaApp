using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using UM.Application.Enum;
using UM.Application.IService;
using UM.Domain.IEntity;
using UM.Domain.Model;

namespace UM.Api.Controllers
{
    [Route("api")]
    [Authorize]
    public class VoteController : BaseController
    {
        private readonly IVoteService _voteService;
        private readonly ICurrentUser _currentUser;

        public VoteController(IVoteService voteService, ICurrentUser currentUser)
        {
            _voteService = voteService;
            _currentUser = currentUser;
        }

        [HttpPost]
        [Route("upvote/{id}")]
        public async Task<ActionResult> UpVote([FromRoute] int id)
        {
            var result = await _voteService.Add(new VoteModel() { PostId = id, VoteType = 1});
            switch (result)
            {
                case Result.NotFound:
                    return NotFound("Post not found");
                default:
                    return Ok();
            }
        }
        [HttpPost]
        [Route("downvote/{id}")]
        public async Task<ActionResult> DownVote([FromRoute] int id)
        {
            var result = await _voteService.Add(new VoteModel() { PostId = id, VoteType = 0 });
            switch (result)
            {
                case Result.NotFound:
                    return NotFound("Post not found");
                default:
                    return Ok();
            }
        }
    }
}

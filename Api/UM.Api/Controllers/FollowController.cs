using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using UM.Application.IService;
using UM.Domain.IEntity;
using UM.Domain.Model;

namespace UM.Api.Controllers
{
    [Route("api")]
    [Authorize]
    public class FollowController : BaseController
    {
        private readonly IFollowService _followService;
        private readonly ICurrentUser _currentUser;

        public FollowController(IFollowService followService, ICurrentUser currentUser)
        {
            _followService = followService;
            _currentUser = currentUser;
        }

        [HttpPost]
        [Route("follow/{userId}")]
        public async Task<ActionResult> Add([FromRoute] int userId)
        {
            var result = await _followService.Add(new FollowModel() { UserId = userId });
            switch (result)
            {
                case Application.Enum.Result.Forbidden:
                    return Forbid("User can't follow themselves");
                default:
                    return Ok();
            }
        }

        [HttpGet]
        [Route("my-followers")]
        public async Task<ActionResult> MyFollowers()
        {
            var result = await _followService.MyFollowers();
            return Ok(result);
        }


        [HttpDelete]
        [Route("follow/{userId}")]
        public async Task<ActionResult> Delete([FromQuery] int userId)
        {
            await _followService.Delete(userId);
            return Ok();
        }
    }
}

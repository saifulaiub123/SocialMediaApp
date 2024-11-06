using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using UM.Application.IService;
using UM.Domain.IEntity;
using UM.Domain.Model;

namespace UM.Api.Controllers
{
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
        [Route("Add")]
        public async Task<ActionResult> Add([FromBody] FollowModel model)
        {
            await _followService.Add(model);
            return Ok();
        }

        [HttpGet]
        [Route("GetAll")]
        public async Task<ActionResult> GetAll()
        {
            var result = await _followService.GetAll();
            return Ok(result);
        }


        [HttpDelete]
        [Route("Delete")]
        public async Task<ActionResult> Delete([FromQuery] int id)
        {
            await _followService.Delete(id);
            return Ok();
        }
    }
}

using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using UM.Application.IService;
using UM.Domain.Model;

namespace UM.Api.Controllers
{
    [Route("api/post")]
    [Authorize]
    public class PostController : BaseController
    {
        private readonly IPostService _postService;

        public PostController(IPostService postService)
        {
            _postService = postService;
        }
        
        [HttpPost]
        public async Task<IActionResult> Add([FromBody] PostModel post)
        {

            await _postService.Add(post);
            return Ok();

        }
        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            var result = await _postService.GetAll();
            return Ok(result);
        }
        [HttpGet("{id}")]
        public async Task<IActionResult> GetById([FromRoute] int id)
        {
            var result = await _postService.GetById(id);
            return Ok(result);
        }
        [HttpPut("{id}")]
        public async Task<IActionResult> Update([FromRoute] int id, [FromBody] PostModel post)
        {
            await _postService.Update(post);
            return Ok();
        }
        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete([FromRoute] int id)
        {
            await _postService.Delete(id);
            return Ok();
        }
    }
}

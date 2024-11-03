using Microsoft.AspNetCore.Mvc;
using UM.Application.IService;
using UM.Domain.Model;

namespace UM.Api.Controllers
{

    public class PostController : BaseController
    {
        private readonly IPostService _postService;

        public PostController(IPostService postService)
        {
            _postService = postService;
        }

        [HttpPost("Add")]
        public async Task<IActionResult> Add([FromBody] PostModel post)
        {

            await _postService.Add(post);
            return Ok();

        }
        [HttpGet("GetAll")]
        public async Task<IActionResult> GetAll()
        {
            var result = await _postService.GetAll();
            return Ok(result);
        }
        [HttpGet("GetById")]
        public async Task<IActionResult> GetById([FromQuery] int id)
        {
            var result = await _postService.GetById(id);
            return Ok(result);
        }
        [HttpPut("Update")]
        public async Task<IActionResult> Update([FromBody] PostModel post)
        {
            await _postService.Update(post);
            return Ok();
        }
        [HttpDelete("Delete")]
        public async Task<IActionResult> Delete([FromQuery] int id)
        {
            await _postService.Delete(id);
            return Ok();
        }
    }
}

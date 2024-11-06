using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json.Linq;
using System.Linq.Expressions;
using UM.Application.IService;
using UM.Domain.IEntity;
using UM.Domain.Model;

namespace UM.Api.Controllers
{
    [Route("api")]
    [Authorize]
    public class CommentController : BaseController
    {
        private readonly ICommentService _commentService;
        private readonly ICurrentUser _currentUser;

        public CommentController(ICommentService commentService, ICurrentUser currentUser)
        {
            _commentService = commentService;
            _currentUser = currentUser;
        }

        
        [HttpPost]
        [Route("comment/{id}")]
        public async Task<ActionResult> Add([FromRoute] int id, [FromBody] CommentModel comment)
        {
            comment.PostId = id;
            await _commentService.Add(comment);
            return Ok();
        }

        [HttpGet]
        [Route("comment/{id}")]
        public async Task<ActionResult> GetAll([FromRoute] int id)
        {
            var result = await _commentService.GetAll(id);
            return Ok(result);
        }

        [HttpPatch]
        [Route("comment/{id}/{commentId}")]
        public async Task<ActionResult> Update([FromRoute] int id, [FromRoute] int commentId, [FromBody] CommentModel comment)
        {
            comment.PostId = id;
            comment.Id = commentId;
            var result = await _commentService.Update(comment);
            switch (result)
            {
                case Application.Enum.Result.Forbidden:
                    return Forbid("User are not allowed to update the comment");
                case Application.Enum.Result.NotFound:
                    return NotFound();
                default:
                    return Ok();
            }

        }

        [HttpDelete]
        [Route("comment/{id}/{commentId}")]
        public async Task<ActionResult> Delete([FromRoute] int id, [FromRoute] int commentId)
        {
            var result = await _commentService.Delete(new CommentModel() { PostId = id, Id = commentId });
            switch (result)
            {
                case Application.Enum.Result.Forbidden:
                    return Forbid("User are not allowed to delete the comment");
                case Application.Enum.Result.NotFound:
                    return NotFound();
                default:
                    return Ok();
            }
        }
    }
}

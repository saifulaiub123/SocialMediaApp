﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace UM.Domain.Model
{
    public class ResetPasswordModel
    {
        public int UserId { get; set; }
        public string NewPassword { get; set; }
    }
}

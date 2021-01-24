$(document).ready(function(){
			$("form").submit(function(){
				var  username=$("#username").val();
				var  password=$("#password").val();
                                
                                var  change_username=$("#change_username").val();
				var  oldpassword=$("#oldpassword").val();
				var  newpassword=$("#newpassword").val();
                                var  remove_username=$("#remove_username").val();
                                var  single_username=$("#single_username").val();
                                
                                if(change_username=="" || oldpassword==""  ||  newpassword=="" )
				{	
                                        if(change_username=="")
					{
						$("#p3").html("Username is required");
						$("#p3").css({"color":"red"});
					}
					if(oldpassword=="")
					{
						$("#p4").html("<p id='error1'>Password is required</p>");
						$("#p4").css({"color":"red"});
					}
                                        if(newpassword=="")
					{
						$("#p5").html("<p id='error1'>New Password is required</p>");
						$("#p5").css({"color":"red"});
                                                
					}
                                        return false;
                                }
                                else
                                if(newpassword!=oldpassword)
                                        {
                                            $("#p5").html("<p id='error1'>New Password is not matched with old password</p>");
                                            $("#p5").css({"color":"red"});
                                             return false;
                                        }
                                else
				if(username=="" || password=="" )
				{	
                                        if(username=="")
					{
						$("#p1").html("<p>Username is required");
						$("#p1").css({"color":"red"});
					}
					if(password=="")
					{
						$("#p2").html("<p>Password is required</p>");
						$("#p2").css({"color":"red"});
					}	
                                        return false;
                                }
                                else
				if(remove_username=="")
				{	
                                        if(remove_username=="")
					{
						$("#p6").html("<p>Username is required");
						$("#p6").css({"color":"red"});
					}
						
                                        return false;
                                }
                                 else
				if(single_username=="")
				{	
                                        if(single_username=="")
					{
						$("#p7").html("<p>Username is required");
						$("#p7").css({"color":"red"});
					}
						
                                        return false;
                                }
                                else
                                {
                                    return true;
                                }
                            });
                        });
                        
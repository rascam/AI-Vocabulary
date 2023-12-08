import dotenv from 'dotenv'
dotenv.config()
const { FRONTEND_URL } = process.env


export function resetPasswordHTML(token: string) {
  return
      "<div style='font-family: Helvetica,Arial,sans-serif;min-width:1000px;overflow:auto;line-height:2'>"+
      "<div style='margin:50px auto;width:70%;padding:20px 0'>"+
      "<div style='border-bottom:1px solid #eee'>"+
      "<a href='https://example.com' style='font-size:1.4em;color: #00466a;text-decoration:none;font-weight:600'>Example</a>"+
      "</div>"+
      "<p style='font-size:1.1em'>Hi,</p>"+
      "<p>Use the button below to reset your password</p>"+
      `<a href=${FRONTEND_URL}password-reset?token=${token}' style='background: #00466a; text-decoration:none; color: white; padding:10px 25px; display:inline-block'>Reset Password</a>`+
      "<p>If you have any questions, just reply to this email—we're always happy to help out.</p>"+
      "<p>Thanks,</p>"+
      "<p>Example</p>"+
      "</div>"+
      "</div>"
}
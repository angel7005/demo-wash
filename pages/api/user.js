import withSession from '../../lib/session';

export default withSession(async (req, res) => {
  const user = req.session.get("user");
  
  console.log('api.user.withSession.begin' + JSON.stringify(user));

  if (user) {
    res.json({
      isLoggedIn: true,
      ...user,
    });
  } else {
    res.json({
      isLoggedIn: false,
    });
  }

    console.log('api.user.withSession.end' + JSON.stringify(user));
});
module.exports = app => {

    app.route('/api/friends')
        .get((req, res) => {res.json(friends)})
        .post((req, res) => {
            friends.push(req.body);
            res.send(true);
        });
};
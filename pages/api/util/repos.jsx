import fetch from 'isomorphic-unfetch';

export default async function Repos(req, res) {
    res.json(
        await (await fetch('https://api.github.com/users/ardaabi1/repos', {
            headers: {
                'Authorization': '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'
            } // get token: https://github.com/settings/tokens
        })).json()
    );
};
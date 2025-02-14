const {Octokit} = require("@octokit/core");
const fs = require('fs');

const download = async () => {
    const octokit = new Octokit()

    const result = await octokit.request('GET /repos/{owner}/{repo}/releases', {
        owner: 'random-rip',
        repo: 'primebot_backend'
    })

    // filter releases that are not draft and not prerelease
    const releases = result.data.filter(release => {
        return !release.draft && !release.prerelease
    })
    releases.forEach(release => {
        const meta = `---\r\ncreated_at: ${release.created_at}\r\n---\r\n## ${release.tag_name}\r\n`
        const changelog = meta + release.body;
        fs.writeFile(`./content/changelogs/${release.tag_name}.md`, changelog, err => {
            if (err) {
                console.error(err);
            }
            console.log(`...${release.tag_name} downloaded...`)
        });
    })
}


console.log('...downloading changelogs...')
download().then(() => {
    console.log('...done downloading changelogs...')
})
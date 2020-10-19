const { zip } = require('zip-a-folder');
class ZipAFolder {
    static async main() {
        await zip('./build', 'build.zip');
    }
}
ZipAFolder.main();
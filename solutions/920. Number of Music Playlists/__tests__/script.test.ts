import {numMusicPlaylists} from '../script'

describe('920. Number of Music Playlists', (): void => {
    it('Multiple playlists without repeating', (): void => {
        expect(numMusicPlaylists(3, 3, 1))
            .toBe(6);
    });

    it('Multiple playlists with repeating', (): void => {
        expect(numMusicPlaylists(2, 3, 0))
            .toBe(6);
    });

    it('Few playlists with repeating', (): void => {
        expect(numMusicPlaylists(2, 3, 1))
            .toBe(2);
    });

    it('Many playlists with repeating', (): void => {
        expect(numMusicPlaylists(16, 16, 4))
            .toBe(2);
    });
})

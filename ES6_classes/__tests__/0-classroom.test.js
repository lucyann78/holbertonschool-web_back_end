// 0-classroom.test.js
import ClassRoom from './0-classroom.js';

describe('ClassRoom', () => {
    test('should create a ClassRoom instance with correct maxStudentsSize', () => {
        const room = new ClassRoom(10);
        expect(room._maxStudentsSize).toBe(10);
    });

    test('should create a ClassRoom instance with different maxStudentsSize', () => {
        const room = new ClassRoom(20);
        expect(room._maxStudentsSize).toBe(20);
    });
});



import { getCard } from '@/app/types/api/api';
import 'isomorphic-fetch';

describe('getCard()', () => {
    test('Should return an array matching ResourceCard', async () => {
        const response = await getCard();
        expect(response).toEqual(expect.arrayContaining([
            expect.objectContaining({
                id: expect.any(Number),
                title: expect.objectContaining({
                    pt: expect.any(String),
                    es: expect.any(String),
                    en: expect.any(String),
                }),
                description: expect.objectContaining({
                    pt: expect.any(String),
                    es: expect.any(String),
                    en: expect.any(String),
                }),
            })
        ]));
    });

    test('Should not throw an error', async () => {
        const response = await getCard();
        expect(() => response).not.toThrowError();
    });
});
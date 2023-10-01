
import '@testing-library/jest-dom';
import { getCard } from '@/app/types/api/api';

describe('getCard function', () => {
    beforeEach(() => {
        const mockResponse = {
            json: jest.fn().mockResolvedValue([
                {
                    id: 1,
                    title: {
                        pt: 'Trilhas',
                        en: 'Steps',
                        es: 'Pasos',
                    },
                    description: {
                        pt: 'Crie planos de estudos especificando aulas e/ou cursos e definindo a ordem que seus alunos devem estudar.',
                        en: 'Create study plans by specifying classes or courses and defining the order in which your students should study.',
                        es: 'Crea planes de estudio especificando clases o cursos y definiendo el orden en el que tus alumnos deben estudiar.',
                    },
                }
            ]),
        };

        global.fetch = jest.fn().mockResolvedValue(mockResponse);
    });

    // clean up mock after each test
    afterEach(() => {
        jest.clearAllMocks();
    });

    it('should make a GET request to the API', async () => {
        await getCard();

        expect(global.fetch).toHaveBeenCalledWith(
            'https://ensinio-fakeapi.vercel.app/items',
            {
                method: 'GET',
            }
        );
    });

    it('should return data when API call is successful', async () => {
        const result = await getCard();

        expect(result).toEqual([
            {
                id: 1,
                title: {
                    pt: 'Trilhas',
                    en: 'Steps',
                    es: 'Pasos',
                },
                description: {
                    pt: 'Crie planos de estudos especificando aulas e/ou cursos e definindo a ordem que seus alunos devem estudar.',
                    en: 'Create study plans by specifying classes or courses and defining the order in which your students should study.',
                    es: 'Crea planes de estudio especificando clases o cursos y definiendo el orden en el que tus alumnos deben estudiar.',
                },
            }
        ]);
    });

    it('should handle API errors and return an empty array', async () => {
        const mockError = {
            json: jest.fn().mockResolvedValue({ error: 'Something went wrong' }),
        };

        global.fetch = jest.fn().mockResolvedValue(mockError);

        const result = await getCard();

        expect(result).toEqual([]);
    });
});

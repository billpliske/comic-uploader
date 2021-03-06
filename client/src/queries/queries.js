import { gql } from 'apollo-boost';

const GET_COMICS = gql`
    {
        comics {
            id
            title
            number
            year
            condition
            notes
        }
    }
`;

const SEARCH = gql`
    query Search($title: String, $number: Int, $year: Int) {
        comic(title: $title, number: $number, year: $year) {
            id
            title
            number
            year
            condition
            notes
        }
    }
`;

const ADD_COMIC = gql`
    mutation AddComic(
        $title: String!
        $number: Int!
        $year: Int!
        $condition: String!
        $notes: String!
        $image: String!
    ) {
        addComic(
            title: $title
            number: $number
            year: $year
            condition: $condition
            notes: $notes
            image: $image
        ) {
            id
            title
            number
            year
            condition
            notes
        }
    }
`;

// const GET = gql`
//     query GetComic($id: ID) {
//         comic(id: $id) {
//             id
//             title
//             number
//             year
//             condition
//             notes
//         }
//     }
// `;

export { GET_COMICS, ADD_COMIC, SEARCH };

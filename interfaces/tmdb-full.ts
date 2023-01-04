export interface Movie {
    adult:                 boolean;
    backdrop_path:         null;
    belongs_to_collection: null;
    budget:                number;
    genres:                any[];
    homepage:              string;
    id:                    number;
    imdb_id:               null;
    original_language:     string;
    original_title:        string;
    overview:              string;
    popularity:            number;
    poster_path:           string;
    production_companies:  ProductionCompany[];
    production_countries:  any[];
    release_date:          Date;
    revenue:               number;
    runtime:               number;
    spoken_languages:      any[];
    status:                string;
    tagline:               string;
    title:                 string;
    video:                 boolean;
    vote_average:          number;
    vote_count:            number;
}

export interface ProductionCompany {
    id:             number;
    logo_path:      string;
    name:           string;
    origin_country: string;
}

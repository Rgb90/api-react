export interface UserType {
    id: number;
    name: string;
    username: string;
    email: string;
    address: Address;
    phone: string;
    website: string;
    company: Company;
  }
  
  export interface Address {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: Geo;
  }
  
  export interface Geo {
    lat: string;
    lng: string;
  }
  
  export interface Company {
    name: string;
    catchPhrase: string;
    bs: string;
  }

  //
  
  export type PostType = {
    userId: string;
    id: number;
    title: string;
  };

//

  export type AlbumType = {
    id: number;
    title: string;
    userId: number;
  };
  
//

  export type LikedAlbumType = {
    userId: number;
    album: AlbumType;
    photoId: number;
    photoUrl: string;
  };
  
  //

  export type Comment = {
    postId: number;
    id: number;
    name: string;
    email: string;
    body: string;
  };
  
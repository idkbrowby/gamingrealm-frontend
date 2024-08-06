/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export interface paths {
    "/user/signup": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Signup
         * @description Endpoint to sign up a user.
         *
         *     Returns session id and user details if authentication is successful.
         */
        post: operations["signup_user_signup_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/user/login": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Login
         * @description Endpoint to authenticate a user. Validation is done on form data before querying DB.
         *
         *     Returns session id and user details if authentication is successful.
         */
        post: operations["login_user_login_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/user/logout": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Logout
         * @description Endpoint to log out a user. The header must include session-id.
         *
         *     Session is deleted from session storage. Client has to delete session cookie.
         */
        post: operations["logout_user_logout_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/user/{user_id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get User
         * @description Endpoint to get a user's data.
         *
         *     Returns user profile data (including number of followers, following, posts).
         */
        get: operations["get_user_user__user_id__get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/user/{uid}/followers": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get User Followers
         * @description Get the specified user's followers.
         */
        get: operations["get_user_followers_user__uid__followers_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/user/{uid}/follow": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Follow User
         * @description Add the currently logged in user as a follower to user <uid>.
         */
        post: operations["follow_user_user__uid__follow_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/user/{uid}/unfollow": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Unfollow User
         * @description Make the currently logged in user unfollow user <uid>.
         */
        post: operations["unfollow_user_user__uid__unfollow_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/post/": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get Posts
         * @description Paginate and get posts based on specified filters (user, tag etc).
         *
         *     Expects pagination headers:
         *         take: The number of items to be retrieved in one page
         *         cursor: The ID of the last fetched item
         */
        get: operations["get_posts_post__get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/post/create": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Create Post
         * @description Create a new post.
         */
        post: operations["create_post_post_create_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/post/search": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Search Posts
         * @description Gets posts based on specified query.
         *
         *     Matching is done using Full Text Search
         */
        get: operations["search_posts_post_search_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/post/{post_id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get Post
         * @description Get full details of a specific post.
         */
        get: operations["get_post_post__post_id__get"];
        put?: never;
        post?: never;
        /**
         * Delete Post
         * @description Delete a post.
         */
        delete: operations["delete_post_post__post_id__delete"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/post/{post_id}/comments": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get Comments
         * @description Paginate and get the comments of a post.
         *
         *     Expects pagination headers:
         *         take: The number of items to be retrieved in one page
         *         cursor: The ID of the last fetched item
         */
        get: operations["get_comments_post__post_id__comments_get"];
        put?: never;
        /**
         * Create Comment
         * @description Create a comment on the specified post.
         */
        post: operations["create_comment_post__post_id__comments_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/post/{post_id}/rating": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Create Rating
         * @description Create a rating on the specified post.
         */
        post: operations["create_rating_post__post_id__rating_post"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/post/{post_id}/comments/{comment_id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        /**
         * Delete Comment
         * @description Endpoint to delete a comment.
         */
        delete: operations["delete_comment_post__post_id__comments__comment_id__delete"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/tags/": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get Tags
         * @description Get all existing tags.
         */
        get: operations["get_tags_tags__get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/ping": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Ping
         * @description API Ping endpoint.
         */
        get: operations["ping_ping_get"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
}
export type webhooks = Record<string, never>;
export interface components {
    schemas: {
        /** Body_create_post_post_create_post */
        Body_create_post_post_create_post: {
            /** Title */
            title: string;
            /** Text Content */
            text_content?: string;
            /** Images */
            images?: string[];
        };
        /**
         * CreatePostResponse
         * @description Data returned when a new post is created.
         */
        CreatePostResponse: {
            /** Id */
            id: string;
            /** Author Id */
            author_id: string;
            /** Title */
            title: string;
            /** Text Content */
            text_content?: string;
            /**
             * Created At
             * Format: date-time
             */
            created_at: string;
            /**
             * Updated At
             * Format: date-time
             */
            updated_at: string;
            /** Urls */
            urls: string[];
        };
        /**
         * Follower
         * @description Represents a Follower record
         */
        Follower: {
            /** User Id */
            user_id: string;
            user?: components["schemas"]["User"];
            /** Follows Id */
            follows_id: string;
            follows?: components["schemas"]["User"];
            /**
             * Followed At
             * Format: date-time
             */
            followed_at: string;
        };
        /** HTTPValidationError */
        HTTPValidationError: {
            /** Detail */
            detail?: components["schemas"]["ValidationError"][];
        };
        /**
         * LoginSuccessResponse
         * @description Data returned on succesful login (or sign up).
         */
        LoginSuccessResponse: {
            user: components["schemas"]["UserProfile"];
            /** Message */
            message: string;
            /** Session-Id */
            "session-id": string;
        };
        /**
         * MessageResponse
         * @description Model returned by endpoints that just return a message.
         */
        MessageResponse: {
            /** Message */
            message: string;
        };
        /**
         * Page[PostComment]
         * @description Represents a page of database objects.
         *
         *     The cursor_id is Null if the query returned no responses.
         */
        Page_PostComment_: {
            /** Data */
            data: components["schemas"]["PostComment"][];
            /** Count */
            count: number;
            /** Cursor Id */
            cursor_id?: string;
        };
        /**
         * Page[Post]
         * @description Represents a page of database objects.
         *
         *     The cursor_id is Null if the query returned no responses.
         */
        Page_Post_: {
            /** Data */
            data: components["schemas"]["Post"][];
            /** Count */
            count: number;
            /** Cursor Id */
            cursor_id?: string;
        };
        /**
         * Password
         * @description Represents a Password record
         */
        Password: {
            /** User Id */
            user_id: string;
            user?: components["schemas"]["User"];
            /** Password */
            password: string;
        };
        /**
         * Post
         * @description Represents a Post record
         */
        Post: {
            /** Id */
            id: string;
            /** Author Id */
            author_id: string;
            author?: components["schemas"]["User"];
            /** Title */
            title: string;
            /** Text Content */
            text_content?: string;
            /**
             * Created At
             * Format: date-time
             */
            created_at: string;
            /**
             * Updated At
             * Format: date-time
             */
            updated_at: string;
            /** Deleted */
            deleted: boolean;
            /** Media */
            media?: components["schemas"]["PostMedia"][];
            /** Ratings */
            ratings?: components["schemas"]["PostRating"][];
            /** Comments */
            comments?: components["schemas"]["PostComment"][];
            /** Reports */
            reports?: components["schemas"]["PostReport"][];
            /** Tags */
            tags?: components["schemas"]["Tag"][];
        };
        /**
         * PostComment
         * @description Represents a PostComment record
         */
        PostComment: {
            /** Id */
            id: string;
            /** Author Id */
            author_id: string;
            author?: components["schemas"]["User"];
            /** Post Id */
            post_id: string;
            post?: components["schemas"]["Post"];
            /** Content */
            content: string;
            /**
             * Created At
             * Format: date-time
             */
            created_at: string;
        };
        /**
         * PostDetails
         * @description Data returned for a specific post.
         *
         *     The comments are paginated, and the first page of comments are included with the first response.
         */
        PostDetails: {
            post: components["schemas"]["Post"];
            comments: components["schemas"]["Page_PostComment_"];
            /** Avg Rating */
            avg_rating: number;
        };
        /**
         * PostMedia
         * @description Represents a PostMedia record
         */
        PostMedia: {
            /** Id */
            id: number;
            /** Post Id */
            post_id: string;
            post?: components["schemas"]["Post"];
            /** Object Url */
            object_url: string;
        };
        /**
         * PostRating
         * @description Represents a PostRating record
         */
        PostRating: {
            /** Post Id */
            post_id: string;
            post?: components["schemas"]["Post"];
            /** Author Id */
            author_id: string;
            author?: components["schemas"]["User"];
            /** Value */
            value: number;
            /**
             * Updated At
             * Format: date-time
             */
            updated_at: string;
        };
        /**
         * PostRatingBody
         * @description Represents a rating for a post. The rating should be an integer in the range [0,5].
         */
        PostRatingBody: {
            /** Rating */
            rating: number;
        };
        /**
         * PostReport
         * @description Represents a PostReport record
         */
        PostReport: {
            /** Id */
            id: string;
            /** Author Id */
            author_id: string;
            author?: components["schemas"]["User"];
            /** Post Id */
            post_id: string;
            post?: components["schemas"]["Post"];
            /** Content */
            content: string;
            /**
             * Created At
             * Format: date-time
             */
            created_at: string;
        };
        /**
         * Tag
         * @description Represents a Tag record
         */
        Tag: {
            /** Id */
            id: number;
            /** Tag Name */
            tag_name: string;
            /** Posts */
            posts?: components["schemas"]["Post"][];
        };
        /**
         * User
         * @description Represents a User record
         */
        User: {
            /** Id */
            id: string;
            /** Email */
            email: string;
            /** Username */
            username: string;
            /**
             * Created At
             * Format: date-time
             */
            created_at: string;
            /** Posts */
            posts?: components["schemas"]["Post"][];
            /** Post Ratings */
            post_ratings?: components["schemas"]["PostRating"][];
            /** Comments */
            comments?: components["schemas"]["PostComment"][];
            /** Reports */
            reports?: components["schemas"]["PostReport"][];
            /** Follows */
            follows?: components["schemas"]["Follower"][];
            /** Followers */
            followers?: components["schemas"]["Follower"][];
            password?: components["schemas"]["Password"];
        };
        /**
         * UserInLogin
         * @description Model representing user at login.
         */
        UserInLogin: {
            /** Username */
            username: string;
            /** Password */
            password: string;
        };
        /**
         * UserInSignup
         * @description Model representing user at signup.
         */
        UserInSignup: {
            /** Username */
            username: string;
            /** Password */
            password: string;
            /**
             * Email
             * Format: email
             */
            email: string;
        };
        /** UserProfile */
        UserProfile: {
            /** Email */
            email: string;
            /** Id */
            id: string;
            /** Username */
            username: string;
            /**
             * Created At
             * Format: date-time
             */
            created_at: string;
        };
        /**
         * UserProfileResponse
         * @description Data returned by the /user/{id} endpoint.
         */
        UserProfileResponse: {
            /** Id */
            id: string;
            /** Username */
            username: string;
            /** Email */
            email: string;
            /**
             * Created At
             * Format: date-time
             */
            created_at: string;
            /** Following Count */
            following_count: number;
            /** Follower Count */
            follower_count: number;
            /** Posts Count */
            posts_count: number;
            posts: components["schemas"]["Page_Post_"];
            /** Is Following */
            is_following?: boolean;
        };
        /** ValidationError */
        ValidationError: {
            /** Location */
            loc: (string | number)[];
            /** Message */
            msg: string;
            /** Error Type */
            type: string;
        };
    };
    responses: never;
    parameters: never;
    requestBodies: never;
    headers: never;
    pathItems: never;
}
export type $defs = Record<string, never>;
export interface operations {
    signup_user_signup_post: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["UserInSignup"];
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["LoginSuccessResponse"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    login_user_login_post: {
        parameters: {
            query?: never;
            header?: {
                "session-id"?: string;
            };
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["UserInLogin"];
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["LoginSuccessResponse"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    logout_user_logout_post: {
        parameters: {
            query?: never;
            header: {
                "session-id": string;
            };
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["MessageResponse"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    get_user_user__user_id__get: {
        parameters: {
            query?: never;
            header?: {
                "session-id"?: string;
            };
            path: {
                user_id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["UserProfileResponse"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    get_user_followers_user__uid__followers_get: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                uid: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Follower"][];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    follow_user_user__uid__follow_post: {
        parameters: {
            query?: never;
            header: {
                "session-id": string;
            };
            path: {
                uid: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Follower"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    unfollow_user_user__uid__unfollow_post: {
        parameters: {
            query?: never;
            header: {
                "session-id": string;
            };
            path: {
                uid: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Follower"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    get_posts_post__get: {
        parameters: {
            query?: {
                uid?: string;
                tag?: string;
            };
            header?: {
                take?: number;
                cursor?: string;
            };
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Page_Post_"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    create_post_post_create_post: {
        parameters: {
            query?: never;
            header: {
                "session-id": string;
            };
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "multipart/form-data": components["schemas"]["Body_create_post_post_create_post"];
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CreatePostResponse"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    search_posts_post_search_get: {
        parameters: {
            query: {
                q: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Page_Post_"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    get_post_post__post_id__get: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                post_id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PostDetails"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    delete_post_post__post_id__delete: {
        parameters: {
            query?: never;
            header: {
                "session-id": string;
            };
            path: {
                post_id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["MessageResponse"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    get_comments_post__post_id__comments_get: {
        parameters: {
            query?: never;
            header?: {
                take?: number;
                cursor?: string;
            };
            path: {
                post_id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Page_PostComment_"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    create_comment_post__post_id__comments_post: {
        parameters: {
            query?: never;
            header: {
                "session-id": string;
            };
            path: {
                post_id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": string;
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PostComment"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    create_rating_post__post_id__rating_post: {
        parameters: {
            query?: never;
            header: {
                "session-id": string;
            };
            path: {
                post_id: string;
            };
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["PostRatingBody"];
            };
        };
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PostRating"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    delete_comment_post__post_id__comments__comment_id__delete: {
        parameters: {
            query?: never;
            header: {
                "session-id": string;
            };
            path: {
                post_id: string;
                comment_id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["MessageResponse"];
                };
            };
            /** @description Validation Error */
            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["HTTPValidationError"];
                };
            };
        };
    };
    get_tags_tags__get: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Tag"][];
                };
            };
        };
    };
    ping_ping_get: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successful Response */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        [key: string]: string;
                    };
                };
            };
        };
    };
}

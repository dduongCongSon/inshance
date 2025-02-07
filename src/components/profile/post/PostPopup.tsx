import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import React from "react";

interface PostPopupProps {
    post: PostType | null;
    isEditing: boolean;
    isCreating: boolean;
    editedTitle: string;
    editedDescription: string;
    newImageUrl: string;
    setEditedTitle: (title: string) => void;
    setEditedDescription: (description: string) => void;
    setNewImageUrl: (url: string) => void;
    saveEdit: () => void;
    saveCreate: () => void;
    toggleLike: () => void;
    handleEdit: () => void;
    handleDelete: () => void;
    closePopup: () => void;
}

const PostPopup: React.FC<PostPopupProps> = ({
                                                 post,
                                                 isEditing,
                                                 isCreating,
                                                 editedTitle,
                                                 editedDescription,
                                                 newImageUrl,
                                                 setEditedTitle,
                                                 setEditedDescription,
                                                 setNewImageUrl,
                                                 saveEdit,
                                                 saveCreate,
                                                 toggleLike,
                                                 handleEdit,
                                                 handleDelete,
                                                 closePopup,
                                             }) => {
    return (
        <div className="popup-overlay">
            <div className="popup-content">
                <button className="close-button" onClick={closePopup}>×</button>

                {isCreating ? (
                    <div className="create-form">
                        <input
                            type="text"
                            value={editedTitle}
                            onChange={(e) => setEditedTitle(e.target.value)}
                            placeholder="Enter title"
                            className="edit-input"
                        />
                        <textarea
                            value={editedDescription}
                            onChange={(e) => setEditedDescription(e.target.value)}
                            placeholder="Enter description"
                            className="edit-input"
                        />
                        <input
                            type="text"
                            value={newImageUrl}
                            onChange={(e) => setNewImageUrl(e.target.value)}
                            placeholder="Enter image URL"
                            className="edit-input"
                        />
                        <button className="save-button" onClick={saveCreate}>
                            Create Post
                        </button>
                    </div>
                ) : isEditing ? (
                    <div className="edit-form">
                        <input
                            type="text"
                            value={editedTitle}
                            onChange={(e) => setEditedTitle(e.target.value)}
                            className="edit-input"
                        />
                        <textarea
                            value={editedDescription}
                            onChange={(e) => setEditedDescription(e.target.value)}
                            className="edit-input"
                        />
                        <button className="save-button" onClick={saveEdit}>
                            Save Changes
                        </button>
                    </div>
                ) : (
                    post && (
                        <>
                            <h2>{post.title}</h2>
                            <p>{post.description}</p>
                            <img src={post.imageUrl} alt={post.title} className="popup-image"/>
                            <div className="button-container">
                                <div onClick={toggleLike} style={{cursor: "pointer"}}>
                                    {post.status ? (
                                        <FavoriteIcon className="heart-icon" style={{color: "red"}}/>
                                    ) : (
                                        <FavoriteBorderIcon className="heart-icon"/>
                                    )}
                                </div>
                                <button onClick={handleEdit}>Edit</button>
                                <button onClick={handleDelete}>Delete</button>
                            </div>
                        </>
                    )
                )}
            </div>
        </div>
    );
};

export default PostPopup;
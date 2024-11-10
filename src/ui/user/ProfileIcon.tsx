

const ProfileIcon = ( {username}: {username: string}) => {
  // Function to get initials from the username
  const getInitials = (name : string) => {
    const nameParts = name.split(" ");
    const firstInitial = nameParts[0].charAt(0).toUpperCase(); // First letter of first name
    const lastInitial =
      nameParts.length > 1 ? nameParts[1].charAt(0).toUpperCase() : ""; // First letter of last name
    return firstInitial + lastInitial;
  };

  return (
    <div
      className="profile-icon"
      style={{
        backgroundColor: "var(--theme-brown)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "50%",
        width: "64px", 
        height: "64px", 
        fontSize: "24px", 
        color: "white",
        fontWeight: "bold", 
      }}
    >
      <span>{getInitials(username)}</span> {/* Display initials */}
    </div>
  );
};

export default ProfileIcon;

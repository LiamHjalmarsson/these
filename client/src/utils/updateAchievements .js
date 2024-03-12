export const updateAchievements = (data, achievementName, achievementPoints) => {
    let updatedAch = [...data.user.achivments];

    let hasAchievement = updatedAch.some(ach => ach.name === achievementName);

    if (!hasAchievement) {
        updatedAch.push({
            name: achievementName,
            points: achievementPoints
        });
    }
    
    return updatedAch;
};

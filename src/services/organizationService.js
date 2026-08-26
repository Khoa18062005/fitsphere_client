const API_URL = 'http://localhost:8080/api/organization';

export const organizationService = {
    getAllUnits: async () => {
        const response = await fetch(`${API_URL}/units`);
        if (!response.ok) throw new Error('Failed to fetch units');
        return response.json();
    },

    getMembers: async (unitId = null) => {
        const url = unitId ? `${API_URL}/members?unitId=${unitId}` : `${API_URL}/members`;
        const response = await fetch(url);
        if (!response.ok) throw new Error('Failed to fetch members');
        return response.json();
    }
};

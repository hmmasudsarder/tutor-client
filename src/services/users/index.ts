/* eslint-disable @typescript-eslint/no-explicit-any */
// get all products

export const getAllUser = async () => {
    try {
      const res = await fetch(
        `http://localhost:5000/api/user`,
        {
          next: {
            tags: ["USER"], // Next.js caching tag
          },
        }
      );
  
      if (!res.ok) {
        throw new Error(`Failed to fetch users: ${res.status} ${res.statusText}`);
      }
  
      const data = await res.json();
      console.log("Fetched Users:", data);
      return data;
    } catch (error: any) {
      console.error("Error fetching users:", error.message);
      return { success: false, message: error.message };
    }
  };
  
  
  export const updateUser = async (userData: any, userEmail: string): Promise<any> => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_API}/api/user/${userEmail}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userData),
        }
      );
  
      if (!res.ok) {
        throw new Error(`Failed to update user: ${res.statusText}`);
      }
  
      // Read the response body as JSON
      const responseData = await res.json(); // This reads the body of the response
  
      return responseData;
    } catch (error: any) {
      return Promise.reject(error.message || "Something went wrong");
    }
  };
  
  
  
  export const getStudentRequst = async (userId: string) => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_API}/api/user/get/${userId}`,
        {
          next: {
            tags: ["USER"],
          },
        }
      );
      const data = await res.json();
      return data; // Return the response data
    } catch (error: any) {
      return { status: false, message: error.message }; // Return error message if failed
    }
  };
  
  
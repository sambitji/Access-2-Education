import sys
import os

# Add project root to sys.path so Backend can be found
current_dir = os.path.dirname(os.path.abspath(__file__))
project_root = os.path.dirname(current_dir)
if project_root not in sys.path:
    sys.path.append(project_root)

# Import the FastAPI app from Backend.main
try:
    from Backend.main import app
except ImportError as e:
    print(f"Error importing Backend.main: {e}")
    # Fallback to local import if package structure differs on Vercel
    sys.path.append(os.path.join(project_root, "Backend"))
    from main import app

# Vercel needs the 'app' variable to be available at the module level
# This bridge ensures the Backend/ folder remains intact for local dev.

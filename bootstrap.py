import os
import sys
import subprocess
import time
import secrets

def run_command(command, cwd=None):
    print(f"\n[BOOTSTRAP] Running: {command} in {cwd or '.'}")
    try:
        shell = sys.platform == "win32"
        subprocess.check_call(command, cwd=cwd, shell=shell)
        return True
    except subprocess.CalledProcessError as e:
        print(f"[ERROR] Command failed with exit code {e.returncode}")
        return False

def main():
    root_dir = os.path.dirname(os.path.abspath(__file__))
    frontend_dir = os.path.join(root_dir, "Frontend")
    backend_dir = os.path.join(root_dir, "Backend")
    ml_dir = os.path.join(root_dir, "ML")

    print("="*60)
    print("      EDU-PLATFORM BOOTSTRAP — INTEGRATION ENGINE")
    print("="*60)

    # 1. Frontend Setup
    print("\n--- PHASE 1: FRONTEND SETUP ---")
    if not os.path.exists(os.path.join(frontend_dir, "node_modules")):
        run_command("npm install", cwd=frontend_dir)
    else:
        print("[OK] Frontend dependencies already installed.")

    # 2. ML Setup & Retraining
    print("\n--- PHASE 2: ML MODEL INITIALIZATION ---")
    run_command(f"{sys.executable} ML/train_cluster.py", cwd=root_dir)

    # 3. Backend Setup
    print("\n--- PHASE 3: BACKEND CONFIGURATION ---")
    env_path = os.path.join(backend_dir, ".env")
    if os.path.exists(env_path):
        with open(env_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Check if we need to replace placeholders
        if "YAHAN_APNI_GENERATED_KEY_DAALO" in content or "SECRET_KEY=" not in content:
            print("[INFO] Generating secure keys for .env...")
            key1 = secrets.token_hex(32)
            key2 = secrets.token_hex(32)
            
            # Simple replacement logic
            new_content = content.replace("SECRET_KEY=YAHAN_APNI_GENERATED_KEY_DAALO", f"SECRET_KEY={key1}")
            new_content = new_content.replace("REFRESH_SECRET_KEY=YAHAN_DUSRI_GENERATED_KEY_DAALO", f"REFRESH_SECRET_KEY={key2}")
            
            # Ensure ML path is correct
            new_content = new_content.replace("ML_MODELS_PATH=../ml/models", "ML_MODELS_PATH=../ML/models")
            
            with open(env_path, 'w') as f:
                f.write(new_content)
            print("[OK] Backend .env updated.")
        else:
            print("[OK] Backend .env already configured.")

    print("\n" + "="*60)
    print("🎉 BOOTSTRAP COMPLETE!")
    print("="*60)
    print("\nTo start the project:")
    print(f"1. Backend:  cd Backend && uvicorn main:app --reload")
    print(f"2. Frontend: cd Frontend && npm run dev")
    print("\nEnsure MongoDB is running on localhost:27017")
    print("="*60)

if __name__ == "__main__":
    main()

export interface IFirebaseAuth {
  displayName: string | null;
  email: string;
  emailVerified: boolean;
  isAnonymous: boolean;
  metadata: {
    creationTime: number;
    lastSignInTime: number;
  };
  phoneNumber: null;
  photoURL: null;
  providerData: [[Object]];
  providerId: string;
  tenantId: null;
  uid: string;
}
